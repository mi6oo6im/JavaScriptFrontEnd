const merriagePromise = new Promise((resolve, reject) => {
    if (Math.random() < 0.3) {
        return reject('Sorry, it\'s me');
    }

    setTimeout(() => {
        resolve('Just Married!')
    }, 5000);
});

merriagePromise
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });


