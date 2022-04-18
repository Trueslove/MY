const validate = (value, vtype) => {
    if ('require' === vtype) {
        return !!value;
    }
    if ('phone' === vtype) {
        return /^1[3-9]\d{9}$/.test(value);
    }
    // 验证码
    if ('captcha' === vtype) {
        return /^[0-9]{6}$/.test(value);
    }
    // 不知道干啥的
    if ('isnumber' === vtype) {
        return /^[0-9]{5,11}$/.test(value);
    }
    if ('isqq' === vtype) {
        return /^[1-9][0-9]{4,10}$/.test(value);
    }
    // 身份证号码验证不准确
    if ('idcard' === vtype) {
        return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value);
    }
    if ('password' === vtype) {
        return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,12}$/.test(value);
    }
    // 邀请码验证
    if ('invitecode' === vtype) {
        return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]$/.test(value);
    }
    // 判断不准确 比如123.
    if ('ismoney' === vtype) {
        return /^(([1-9]\d*)|\d)(\.\d{1,2})?$/.test(value);
    }
    if ('email' === vtype) {
        // return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
        return /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/.test(value);
    }
    if ('url' === vtype) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    }
    if ('paragraph' === vtype) {
        return /^[A-Z0-9]{18}$/.test(value);
    }
    // 银行卡验证
    if ('card' === vtype) {
        let bankno = value;
        let lastNum = bankno.substr(bankno.length - 1, 1); //取出最后一位（与luhm进行比较）
        let first15Num = bankno.substr(0, bankno.length - 1); //前15或18位
        let newArr = [];

        // 前15或18位倒序存进数组
        for (let i = first15Num.length - 1; i > -1; i--) newArr.push(first15Num.substr(i, 1));

        let arrJiShu = []; // 奇数位*2的积 <9
        let arrJiShu2 = []; // 奇数位*2的积 >9
        let arrOuShu = []; // 偶数位数组
        for (let j = 0; j < newArr.length; j++) {
            if ((j + 1) % 2 == 1) { //奇数位
                if (parseInt(newArr[j]) * 2 < 9) arrJiShu.push(parseInt(newArr[j]) * 2);
                else arrJiShu2.push(parseInt(newArr[j]) * 2);
            } else arrOuShu.push(newArr[j]); // 偶数位
        }

        let jishu_child1 = []; //奇数位*2 >9 的分割之后的数组个位数
        let jishu_child2 = []; //奇数位*2 >9 的分割之后的数组十位数
        for (let h = 0; h < arrJiShu2.length; h++) {
            jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
            jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
        }

        let sumJiShu = 0; //奇数位*2 < 9 的数组之和
        let sumOuShu = 0; //偶数位数组之和
        let sumJiShuChild1 = 0; //奇数位*2 >9 的分割之后的数组个位数之和
        let sumJiShuChild2 = 0; //奇数位*2 >9 的分割之后的数组十位数之和
        let sumTotal = 0;

        for (let m = 0; m < arrJiShu.length; m++) sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
        for (let n = 0; n < arrOuShu.length; n++) sumOuShu = sumOuShu + parseInt(arrOuShu[n]);

        for (let p = 0; p < jishu_child1.length; p++) {
            sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
            sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
        }

        //计算总和
        sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);

        //计算Luhm值
        let k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
        let luhm = 10 - k;
        return lastNum == luhm;
    }
}

export {
    validate
};