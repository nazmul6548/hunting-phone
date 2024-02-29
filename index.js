const myProjectLinks = async () => {
    const myLink = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
    const documents = await myLink.json();
    // console.log(documents.data);
    const phones = documents.data;
// console.log(phones);
    displayPhone(phones)
    //  for (const iterator of phones) {
    //     console.log(iterator);
    // }

}


const displayPhone = phone => {
    // console.log(phone);
    // for (const iterator of phone) {
    //     console.log(iterator);
    // }
    const phoneContainer = document.getElementById("phone-container");
    phone.forEach(phone => {
        console.log(phone);

        const phoneinformation = document.createElement('div');
        phoneinformation.classList=`card card-compact  bg-gray-50 shadow-xl`;
        phoneinformation.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes"  /></figure>
                    <div class="card-body text-center">
                      <h2 class="card-title flex justify-center">Brand : ${phone.brand}</h2>
                      <p class=text-xl>Phone Name : ${phone.phone_name}</p>
                      <p class=text-xl>Slug : ${phone.slug}</p>
                      <div class="card-actions justify-center">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
        `
        phoneContainer.appendChild(phoneinformation)
    });
}

myProjectLinks();