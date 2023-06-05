/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function (coordinates) {
    let currCoordinate = coordinates[0];
    let nextCoordinate = coordinates[1];

    let xCoordinateDiffPrev = nextCoordinate[0] - currCoordinate[0];
    let yCoordinateDiffPrev = nextCoordinate[1] - currCoordinate[1];
    let slopePrev = yCoordinateDiffPrev / xCoordinateDiffPrev;

    for (let i = 1; i < coordinates.length - 1; i++) {
        currCoordinate = coordinates[i];
        nextCoordinate = coordinates[i + 1];

        xCoordinateDiffCur = nextCoordinate[0] - currCoordinate[0];
        yCoordinateDiffCur = nextCoordinate[1] - currCoordinate[1];

        let slopeCur = yCoordinateDiffCur / xCoordinateDiffCur;
        if (Math.abs(slopeCur) === Infinity && Math.abs(slopePrev === Infinity)) continue;
        if (slopeCur !== slopePrev) return false;

        slopePrev = slopeCur;
    }
    return true;
};

const coordinates = [
    [0, 0],
    [0, 1],
    [0, -1]
];

console.log(checkStraightLine(coordinates));
