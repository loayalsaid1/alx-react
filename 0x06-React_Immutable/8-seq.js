import { Seq } from 'immutable';

export default function printBestStudents(scores) {
  const capitalizeWord = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  const bestStudents = Seq(scores)
    .filter((entry) => entry.score >= 70)
    .map((entry) => ({
      ...entry,
      firstName: capitalizeWord(entry.firstName),
      lastName: capitalizeWord(entry.lastName),
    }));

  console.log(bestStudents.toJS());
}
z
