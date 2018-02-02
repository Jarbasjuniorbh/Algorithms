class TelephoneNumber {

    constructor(number) {
        this._number = number;
        this._result = [];
    }

    printWords() {
        this._printWords(0);
    }

    _printWords(curDigit) {
        if (curDigit == this._number.length) {
            let result = this._result.join('');
            if (result === "TOOCOOL") {
                console.log(result);
            }

            return;
        }
        for (let i = 0; i < 3; ++i) {
            this._result[curDigit] = this._getCharKey(this._number[curDigit], i);
            this._printWords(curDigit + 1);

            if (this._number[curDigit] == 0 || this._number[curDigit] == 1)
                return;
        }
    }

    _getCharKey(key, pos) {
        switch (key) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 'ABC'.charAt(pos);
            case 3:
                return 'DEF'.charAt(pos);
            case 4:
                return 'GHI'.charAt(pos);
            case 5:
                return 'JKL'.charAt(pos);
            case 6:
                return 'MNO'.charAt(pos);
            case 7:
                return 'PRS'.charAt(pos);
            case 8:
                return 'TUV'.charAt(pos);
            case 9:
                return 'WXY'.charAt(pos);
            default:
                break;
        }
    }
}

const telNumber = new TelephoneNumber([8, 6, 6, 2, 6, 6, 5]);
telNumber.printWords();