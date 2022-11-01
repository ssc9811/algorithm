const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion = ["josipa", "filipa", "marina", "nikola"];

function solution(participant, completion) {
  participant = participant.sort();
  completion = completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
    }
  }
  return participant;
}

solution(participant, completion);

// console.log(participant.join());

// function solution(participant, completion) {
// completion.map((p) => {
//   participant.splice(participant.indexOf(p), 1);
// });
// return participant.join();
// }
