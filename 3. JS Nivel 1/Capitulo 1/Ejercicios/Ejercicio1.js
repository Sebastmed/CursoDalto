/*
3 chicos quieren comprar el helado más caro que haya en venta en una heladería.
Roberto tiene $1,5 dólares
Pedro tiene $1,7 dólares
Cofla tiene $3 dólares

Los precios de los helados son los siguientes:
-Palito de helado de agua: $0,6 dólares
-Palito de helado de crema: $1 dólares
-Bombón helado marca Heladix: $1,6 dólares
-Bombón helado marca Heladovich: $1,7 dólares
-Bombón helado marca Helardo: $1,8 dólares
-Potecito de helado con confites: $2,9 dólares
-Pote de 1/4 kg: $2,9 dólares


*/

dinRoberto = prompt("Cuanto dinero tienes Roberto?");

    if (dinRoberto < 0.6) {
    document.write ("Roberto, no te alcanza para ningún helado");
    }

    else if (dinRoberto >= 0.6 && dinRoberto < 1) {
        document.write ("Roberto, compra el Palito de helado de agua");
    }
    
    else if (dinRoberto >= 1 && dinRoberto < 1.6) {
        document.write ("Roberto, compra el Palito de helado de crema");
    }

    else if (dinRoberto >= 1.6 && dinRoberto < 1.7) {
        document.write ("Roberto, compra el Bombón helado marca Heladix");
    }

    else if (dinRoberto >= 1.7 && dinRoberto < 1.8) {
        document.write ("Roberto, compra el Bombón helado marca Heladovich");
    }

    else if (dinRoberto >= 1.8 && dinRoberto < 2.9) {
        document.write ("Roberto, compra el Bombón helado marca Helardo");
    }

    else if (dinRoberto >= 2.9) {
        document.write ("Roberto, compra el Potecito de helado con confites o el Pote de 1/4 kg");
        document.write ("Tu vuelto es de " (dinRoberto - 2.9));
    }

dinPedro = prompt ("Cuanto dinero tienes Pedro?");

    if (dinPedro < 0.6) {
    alert ("Pedro, no te alcanza para ningún helado");
    }

    else if (dinPedro >= 0.6 && dinPedro < 1) {
    alert ("Pedro, compra el Palito de helado de agua");
    }

    else if (dinPedro >= 1 && dinPedro < 1.6) {
    alert ("Pedro, compra el Palito de helado de crema");
    }

    else if (dinPedro >= 1.6 && dinPedro < 1.7) {
    alert ("Pedro, compra el Bombón helado marca Heladix");
    }

    else if (dinPedro >= 1.7 && dinPedro < 1.8) {
    alert ("Pedro, compra el Bombón helado marca Heladovich");
    }

    else if (dinPedro >= 1.8 && dinPedro < 2.9) {
    alert ("Pedro, compra el Bombón helado marca Helardo");
    }

    else if (dinPedro >= 2.9) {
    alert ("Pedro, compra el Potecito de helado con confites o el Pote de 1/4 kg");
    }

dinCofla = prompt ("Cuanto dinero tienes Cofla?");
dinCofla = Number (dinCofla)

    if (dinCofla < 0.6) {
    alert ("cofla, no te alcanza para ningún helado");
    }

    else if (dinCofla >= 0.6 && dinCofla < 1) {
    alert ("Cofla, compra el Palito de helado de agua");
    dinCofla -= 0.6;
    alert ("Tu vuelto es de " + dinCofla);
    }

    else if (dinCofla >= 1 && dinCofla < 1.6) {
    alert ("Cofla, compra el Palito de helado de crema");
    dinCofla -= 1;
    alert ("Tu vuelto es de " + dinCofla);
    }

    else if (dinCofla >= 1.6 && dinCofla < 1.7) {
    alert ("Cofla, compra el Bombón helado marca Heladix");
    dinCofla -= 1.6;
    alert ("Tu vuelto es de " + dinCofla);
    }

    else if (dinCofla >= 1.7 && dinCofla < 1.8) {
    alert ("Cofla, compra el Bombón helado marca Heladovich");
    dinCofla -= 1.7;
    alert ("Tu vuelto es de " + dinCofla);
    }

    else if (dinCofla >= 1.8 && dinCofla < 2.9) {
    alert ("Cofla, compra el Bombón helado marca Helardo");
    dinCofla -= 1.8;
    alert ("Tu vuelto es de " + dinCofla);
    }

    else if (dinCofla >= 2.9) {
    alert ("Cofla, compra el Potecito de helado con confites o el Pote de 1/4 kg");
    dinCofla -= 2.9; 
    alert ("Tu vuelto es de $ " + dinCofla);
    }