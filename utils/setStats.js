export const setStats = () => {
  let xStat = sessionStorage.getItem("xStat");
  let oStat = sessionStorage.getItem("oStat");
  let drawStat = sessionStorage.getItem("drawStat");

  if (xStat == null) {
    sessionStorage.setItem("xStat", 0);
  }
  if (oStat == null) {
    sessionStorage.setItem("oStat", 0);
  }
  if (drawStat == null) {
    sessionStorage.setItem("drawStat", 0);
  }
};
