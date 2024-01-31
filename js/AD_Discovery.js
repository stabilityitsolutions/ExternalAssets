function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    //table = document.getElementById("myTable");
    table = document.getElementsByTagName("table")[0];
  
    //document.getElementsByTagName("TH")[n].style.background = 'green'
    allTH = document.getElementsByTagName("TH")
    for (i = 0; i < (allTH.length - 1); i++) {
      allTH[i].style.background = '#666'
      allTH[i].innerHTML = (/^\w+/.exec(allTH[i].innerHTML))[0]
      //console.log("n value: " + n)
      //console.log("i value: " + i + " data: " + allTH[i].innerHTML)
    }
    // Set the background for the TH that was selected
    allTH[n].style.background = '#8b8282'
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") { 
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;      
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
    if (dir == "asc") {
        allTH[n].innerHTML = allTH[n].innerHTML + ' &#8593'
    } else {
        allTH[n].innerHTML = allTH[n].innerHTML + ' &#8595'
    }
}