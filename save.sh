# Simple script to simplify git pushing
# usage: ./save.sh [COMMIT MESSAGE]

usage() {
	echo "usage: ./save.sh [OPTIONAL COMMIT MESSAGE]"
}

if [ $# == 0 ]
then
	git add .
	git commit -m "Saving"
	git push
	code=$?
	echo "Exit code: $code"
elif [ $# == 1 ]
then
	argument="$1"
	git add .
	git commit -m "$argument"
	git push
	code=$?
	echo "Exit code: $code"
else
	$usage
fi

