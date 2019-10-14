import {
  createHintOne,
  createHintTwo,
  createHintThree,
  createHintFour,
  createHintFive,
  createHintSix
} from "./d3Manipulations";

const manageHints = mode => {
  switch (mode) {
    case 0:
      createHintOne();
      break;
    case 1:
      createHintTwo();
      break;
    case 2:
      createHintThree();
      break;
    case 3:
      createHintFour();
      break;
    case 4:
      createHintFive();
      break;
    case 5:
      createHintSix();
      break;
    default:
      console.log("Nothing happens");
  }
};

const enableAllHints = () => {
  createHintOne();
  createHintTwo();
  createHintThree();
  createHintFour();
  createHintFive();
  createHintSix();
}

export default manageHints;
export { enableAllHints };