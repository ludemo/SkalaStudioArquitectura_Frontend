export const getEmoticon = (qualification) => {
  if (qualification >= 90) {
    return "🤩";
  } else if (qualification >= 70) {
    return "😊";
  } else if (qualification >= 50) {
    return "😐";
  } else if (qualification >= 30) {
    return "😖";
  } else {
    return "😓";
  }
};
