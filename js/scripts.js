function triangle(side1, side2, side3) {
  
}
  



$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    const side1 = parseInt($("side1")).val();
    const side2 = parseInt($("side2")).val();
    const side3 = parseInt($("side3")).val();

    let result;
    if ("side1" === "side2" === "side3"){
      result = ("equilateral");
     } else if ("side1" === "side2" > "side3" || < "side3") {
      result = ("isosceles");
      } else if ("side1" !== "side2" !== "side3") {
      result = ("scalene");
     } else if ("side1" && "side2" <= "side3") {
      result = ("not");
      }
      $("#output").text(result);
    });
});
