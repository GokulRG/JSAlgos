function fibonacci(n) {

    if (n <= 2) {
        return 1;
    }

    let prev = 1, curr = 1; 
    let next;

    for (let i=3; i<=n; i++) {
        next = prev+curr;
        prev = curr;
        curr = next;
    }

    return next;
}


console.log(fibonacci(9));