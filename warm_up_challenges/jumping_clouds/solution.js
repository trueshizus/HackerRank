function jumpingOnClouds(c) {

    let step = 0;
    let i = 1;

    while (i < c.length) {
        if (c[i + 2]) {
            i++;
        } else {
            i = i + 2;
        }
        step++;
    }

    return step;

}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))

