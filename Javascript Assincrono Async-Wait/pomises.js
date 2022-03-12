//Assíncrono: não ocorre ou não se efetiva ao mesmo tempo.
//Javascript roda de maneira síncrona

// Promises: objeto de processamento assíncrono. Inicia com valor desconhecido. Após: pode ser resolvida then() ou rejeitada catch()
//3 estados da promise: 1- pending 2- fulfilled 3 - rejected

const myPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve(console.log("Resolvida"));
  }, 2000);
});
//Após resolvida, será imprimido no console após 2s "resolvida"

const myPromise2 = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve(console.log("Resolvida")
  , 2000);
});

await myPromise2
        .then((result) => result + " passando pelo then")
        .then((result) => result + " e agora cabaou!!")
        .catch((err) => console.log(err.message));
      });

        //após 2 segundos retornará o valor passando pelos then...

// a palavra async define funções assíncronas
// a palavra await para o código até que a promise seja resolvida.
async function resolvePromise() {
  const myPromise3 = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('Resolvida');
    }, 3000);
  });
  const resolved = await myPromise3
  .then((result) => result = ' passando pelo then')
  .then((result) => result + ' e agora acabou!')
  .catch((err) => console.log(err.message));
  return resolved;
}

await resolvePromise();
//Para chamar uma função assíncrona: await resolvePromise(). Se chamar apenas resolvePromise() retorna Promise{<pending>}

new Promise((resolve, reject) => {
  console.log('Initial');

  resolve();
})
.then(() => {
  throw new Error('Something failed');

  console.log('Do this');
})
.catch(() => {
  console.log('Do that');
})
.then(() => {
  console.log('Do this whatever happened before');
});


//UTILIZANDO O try... catch

async function resolvePromise() {
  const myPromise4 = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('Resolvida');
    }, 3000);
  });
  let result;
  try{
    result = await myPromise4
    .then((result) => result = ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
  } catch(err) {
    result = err.message;
  }
    return result;
}

await resolvePromise();

// Consumindo APIS
// fetch retorna uma prom
