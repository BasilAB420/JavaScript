let mark= window.prompt("Enter your mark");
    switch (true) { 
     case (mark >= 90 && mark <= 100 ):
        document.write("A")
        break;
     case (mark >= 80 && mark <= 89 ):
       document.write("B")
        break;
     case (mark >= 70 && mark <= 79 ):
       document.write("C")
        break;
     case (mark >= 60 && mark <= 69 ):
        document.write("D")
        break;
     case (mark >= 50 && mark <= 59 ):
       document.write("E")
        break;
     case (mark >= 0 && mark <= 49 ):
       document.write("Fail")
        break;
}