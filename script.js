let Brewery = document.createElement('div');

Brewery.innerHTML = `<input type="text" id="txt" placeholder=" Enter the Name">

<button class="button-class" type="button" onClick="foo()">Search</button>`

var res1 = document.getElementById("results")

var head = document.getElementById('header')

head.after(Brewery);

async function foo() {

    try {

        let character = document.getElementById('txt').value

        if (!character) {

            alert('please enter text name')

            return

        }
        let result = await fetch(`https://api.openbrewerydb.org/breweries/search?query=${character}`)

        let res = await result.json();

        if (res == null || res.length == 0) {

            res1.innerText = "No Value Found";

        } else {

            for (let i = 0; i < res.length; i++) {
                Breweryname = res[i].name;

                Brewerytype = res[i].brewery_type;

                Breweryaddress = res[i].address_2;

                Brewerywebsite = res[i].website_url; 

                Breweryphonenumber = res[i].phone;
              
                document.getElementById('txt').value = "";

                res1.innerText = `* Brewery Name        :${Breweryname}
                        * Brewery Type        :${Brewerytype} 
                        * Brewery Address     :${Breweryaddress} 
                        * Brewery Website     :${Brewerywebsite}
                        * Brewery PhoneNumber :${Breweryphonenumber}`

            }

        }

    }
    catch (err) {

        res1.innerText = "No value Found";

    }

}



