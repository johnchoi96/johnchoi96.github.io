/* mchoi John M Choi */

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <pthread.h>

#define MAX_THREADS 8
#define MAX_TASK 16

/* Int array to store maximum differences */
volatile int *results;
volatile int totalNumbers;
int nworkerCopy;

/* Global Variables */
volatile int counter; // thread ID - result array index
volatile int queueSize;

pthread_mutex_t m;
pthread_cond_t empty;
pthread_cond_t full;

/* Struct with list of numbers and size from the input file */
typedef struct {
  int size;
  int *list;
} NumberList;

enum TASK_TYPE { LOCAL_MAX, GLOBAL_MAX };

struct Task {
	enum TASK_TYPE task_type;
	// add new field here if you see necessary
	int *data;
	int dataSize;
	int id; //used to log task in the result array
};

struct Task task_queue[MAX_TASK];

struct Task dequeue() {
  if (queueSize == 0) {
    struct Task returnTask;
    returnTask.id = -2;
    return returnTask;
  }
  struct Task task = task_queue[queueSize - 1];
  // printf("queueSize from dequeue: %d\n", queueSize);
  queueSize--;
  return task;
}

void enqueue(struct Task task) {
  for (int i = queueSize; i > 0; i--) {
    task_queue[i] = task_queue[i - 1];
  }
  task_queue[0] = task;
  // printf("queueSize from enqueue: %d\n", queueSize);
  queueSize++;
}

void *producer(void *arg) {
  NumberList *nl = (NumberList *)arg;
  while (counter != nl->size) {
    pthread_mutex_lock(&m);
    while (queueSize == 16) {
      // printf("were in inner while loop producer\n");
      // printf("queue size: %d\n", queueSize);
      
      pthread_cond_wait(&empty, &m);
    }
    struct Task task;
    int i;
    task.data = (int *)malloc((counter + 1) * sizeof(int));
    for (i = 0; i <= counter; i++) {
      task.data[i] = nl->list[i];
    }
    task.dataSize = i;
    //task.dataSize = counter;
    task.id = counter;
    counter++;
    enqueue(task);
    pthread_cond_signal(&full);
    pthread_mutex_unlock(&m);
  }
  return NULL;
}

void *consumer(void *arg) {
  while (totalNumbers != 0) {
    //printf("reached\n");
    //usleep(1);
    pthread_mutex_lock(&m);
    while (queueSize == 0) {
      
      if (totalNumbers == 0) {
      	pthread_cond_broadcast(&full);
      	pthread_cond_broadcast(&empty);
      	pthread_mutex_unlock(&m);
      	return NULL;
    	}
      // printf("totalNumber: %d\n", totalNumbers);
      // printf("were in cosumer inner while loop\n");
      pthread_cond_wait(&full, &m);
    }
    if (totalNumbers == 0) {
      pthread_mutex_unlock(&m);
      return NULL;
    }
    struct Task task = dequeue();
    // printf("totalNumber after dequeue: %d\n", totalNumbers);
    if (task.id == -2) {
      pthread_cond_broadcast(&full);
      pthread_cond_broadcast(&empty);
      pthread_mutex_unlock(&m);
      return NULL;
    }
    if (totalNumbers == 0) {
      pthread_cond_broadcast(&full);
      pthread_cond_broadcast(&empty);
    }
    totalNumbers--;
    //printf("total number: %d\n", totalNumbers);
    
    pthread_cond_signal(&empty);
    pthread_mutex_unlock(&m);
    
    int max = task.data[task.dataSize - 1];
    int min = task.data[0];
    int difference;
    if (task.dataSize != 1) {
      for (int i = 0; i < task.dataSize; i++) {
        if (max < task.data[i]) {
          max = task.data[i];
        }
        if (min > task.data[i]) {
          min = task.data[i];
        }
      }
      difference = max - min;
    } else {
      difference = -1;
    }
    results[task.id] = difference;
  }
  return NULL;
}

static void Error_msg(const char * msg) {
	printf("%s\n", msg);
	exit(1);
}

/**
  * Returns a pointer to the struct with list of numbers and size.
  *
  * @param fp file pointer of input file
  * @return nl pointer to the struct with list of numbers
  */
NumberList *populateList(FILE *fp) {
  int counter = 0;
  int capacity = 5;
  int *list = (int *)calloc(capacity, sizeof(int));
  int number;
  int matches = fscanf(fp, "%d", &number);
  if (matches != 1) {
    free(list);
    fprintf(stderr, "Empty file\n");
    fclose(fp);
    exit(EXIT_FAILURE);
  }
  while (matches != EOF) {
    if (counter >= capacity) {
      capacity *= 2;
      int *newList = (int *)calloc(capacity, sizeof(int));
      for (int i = 0; i < counter; i++) {
        newList[i] = list[i];
      }
      free(list);
      list = (int *)calloc(capacity, sizeof(int));
      for (int i = 0; i < counter; i++) {
        list[i] = newList[i];
      }
      free(newList);
    }
    list[counter++] = number;
    matches = fscanf(fp, "%d", &number);
    if (matches != 1 && matches != EOF) {
      free(list);
      fclose(fp);
      fprintf(stderr, "Invalid input detected\n");
      exit(EXIT_FAILURE);
    }
  }
  NumberList *nl = (NumberList *)malloc(sizeof(NumberList));
  nl->size = counter;
  nl->list = list;
  fclose(fp);
  return nl;
}

int findMaxDifference() {
  int max = results[0];
  for (int i = 1; i < counter; i++) {
    if (max < results[i]) {
      max = results[i];
    }
  }
  return max;
}

int main(int argc, char * argv[]) {

	if (argv[1] == NULL || argv[2] == NULL || argc != 3) {
		Error_msg("Usage: ./proc_3 <thread num> <file name>");
	}

	unsigned nworker = atoi(argv[1]);
	if (nworker <= 0) {
		Error_msg("worker number should be larger than 0!");
	}
	else if (nworker > MAX_THREADS) {
		Error_msg("Worker number reaches max!");
	}

  FILE *fp = fopen(argv[2], "r");
  if (!fp) {
    Error_msg("Can't open the file\n");
  }
  
  //initialize mutex and lock
  pthread_mutex_init(&m, NULL);
  pthread_cond_init(&empty, NULL);
  pthread_cond_init(&full, NULL);
  
  //Initialize globals
  counter = 0;
  queueSize = 0;
  nworkerCopy = nworker;
  
  //Read the input file
  NumberList *nl = populateList(fp);
  totalNumbers = nl->size;
	//synchronization initialization

  results = (int *)malloc(nl->size * sizeof(int));
  
  pthread_t producerThread;
	pthread_t *workers = (pthread_t *)malloc(nworker * sizeof(pthread_t));

	int i;
	//unsigned worker_index = 1;
	if (pthread_create(&producerThread, NULL, producer, nl) != 0) { //Create producer thread
	  Error_msg("Creating producer thread Error_msg!");
	}
	for (i = 0; i < nworker; i++) {
		if (pthread_create(&workers[i], NULL, consumer, NULL) != 0) {
			Error_msg("Creating thread Error_msg!");
		} 
	}

	// manager routine

  if (pthread_join(producerThread, NULL) != 0) {
    Error_msg("Joining producer thread Error_msg!");
  }
	for (i = 0; i < nworker; i++) {
		if (pthread_join(workers[i], NULL) != 0) {
			Error_msg("Joining thread Error_msg!");
	  }
	}

	//synchronization destruction
	//other resource destruction
  int maxDifference = findMaxDifference();
  fprintf(stdout, "The maximum difference is %d\n", maxDifference);
  free(nl->list);
  free(nl);
	return 0;
}
