console.log('Cookies!!!');

// document.cookie = 'email=isabella@email.com';

// document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC';
// document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2022 12:00:00 UTC';

// document.cookie = 'email=marcelo@email.com; expires=Thu, 17 Dec 2022 12:00:00 UTC; path=/';
// document.cookie = 'name=marcelo; expires=Thu, 17 Dec 2022 12:00:00 UTC; path=/';
// document.cookie = 'user=email:isabella@email.com,name:isabella; expires=Thu, 17 Dec 2022 12:00:00 UTC; path=/';
// document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC; path=/';

document.cookie = 'email=marcelo@email.com, expires=Thu, 17 Dec 2022 12:00:00 UTC; path=/';
// document.cookie = 'email=; expires=Thu, 17 Dec 2020 12:00:00 UTC;';

const myCookie = document.cookie;
console.log(myCookie);
