const myProjectLinks = async (searchText,isShowAll) => {
    const myLink = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const documents = await myLink.json();
    // console.log(documents.data);
    const phones = documents.data;
// console.log(phones);
    displayPhone(phones,isShowAll)
    //  for (const iterator of phones) {
    //     console.log(iterator);
    // }

}


const displayPhone =(phone,isShowAll) => {
    // console.log(phone);
    // for (const iterator of phone) {
    //     console.log(iterator);
    // }
    const showAllContainer = document.getElementById('show-all-container');
    // showAllContainer.innerText=""
    if (phone.length > 12 && !isShowAll) {
        showAllContainer.classList.remove("hidden");
    }else {
        showAllContainer.classList.add("hidden");

    }
    if (!isShowAll) {
        phone = phone.slice(0,12)
    }
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.innerHTML ="";
    phone.forEach(phone => {
        console.log(phone);

        const phoneinformation = document.createElement('div');
        phoneinformation.classList=`card card-compact  bg-gray-50 shadow-xl p-5`;
        phoneinformation.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes"  /></figure>
                    <div class="card-body text-center">
                      <h2 class="card-title flex justify-center">Brand : ${phone.brand}</h2>
                      <p class=text-xl>Phone Name : ${phone.phone_name}</p>
                      <p class=text-xl>Slug : ${phone.slug}</p>
                      <div class="card-actions justify-center">
                        <button onclick="handleshowdetails()" class="btn btn-primary bg-blue-300 text-black border-cyan-300 font-bold">Buy Now</button>
                      </div>
                    </div>
        `
        phoneContainer.appendChild(phoneinformation)
    });

    loadingSpinnerToggle(false);
}

const handleshowdetails = async (id) => {
    // console.log("mia");
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    console.log(data);
    showdetailsmodal(data)
}
const showdetailsmodal = (phone) => {
    const name = document.getElementById('showdetailname')
    name.innerText=phone.data.name
    console.log(phone.data);
    my_modal_5.showModal(phone)
}



// handle search button 
const searchButtonHandeler = (isShowAll) => {
    loadingSpinnerToggle(true)
    
    // console.log("fire");
    const searchfield = document.getElementById('search-field').value;
    // const searchresult = searchfield.value;
    // console.log(searchfield);
    myProjectLinks(searchfield,isShowAll);
}

const loadingSpinnerToggle = (isLoading) => {
const spinner = document.getElementById('loading-spinner');
if (isLoading) {
    spinner.classList.remove('hidden');
    
}else{
    spinner.classList.add('hidden');
}
}
const showAll = () => {
    const showallBtn = document.getElementById('show-all-container');
    searchButtonHandeler(true)
}

// myProjectLinks();
