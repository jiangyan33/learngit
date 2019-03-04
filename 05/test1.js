// let obj = {
//     name: '石江山',
//     math: ''
// };

// let arr = [[1, 2, 3], ['a', 'b', 'c']];
// let arr1 = [];
// for (let item of arr) {

// }

// ''.length
// console.log(arr1);
// let math = null;

// let obj1 = {
//     age: 10,
//     math
// }

// console.log(obj1);



// {"paymentAmount":98398.8,"supplierId":"01c466c800964466a6848b691d5fdfb2","supplierName":"深圳市康达健医疗器械有限公司","bankName":"中国银行深圳笋岗支行","bankCode":"770557949813","paymentWay":"银行转账","moneyPurpose":"1","items":[{"id":"d245b120ec834c789274c38178fd8aef","ver":2}],"listNum":1,"godownEntryNum":1,"invoiceNum":1,"remarks":"测试备注信息","contract_no":""}



// {"paymentAmount":98398.8,"supplierId":"01c466c800964466a6848b691d5fdfb2","supplierName":"深圳市康达健医疗器械有限公司","bankName":"中国银行深圳笋岗支行","bankCode":"770557949813","paymentWay":"银行转账","moneyPurpose":"1","items":[{"id":"d245b120ec834c789274c38178fd8aef","ver":2}],"listNum":1,"godownEntryNum":1,"invoiceNum":1,"remarks":"测试备注信息","contract_no":"","contract_start_date":'',"contract_end_date":''}

// {"id":"29276d00b6d14add94b22953b0db00d1","items":[{"id":""}],"listNum":2,"godownEntryNum":2,"invoiceNum":2,"remarks":"","contract_no":""}


// {"id":"29276d00b6d14add94b22953b0db00d1","items":[{"id":""}],"listNum":2,"godownEntryNum":2,"invoiceNum":2,"remarks":"","contract_no":""}


// {"id":"29276d00b6d14add94b22953b0db00d1","paymentAmount":180666,"paymentWay":"现金","moneyPurpose":"1","items":[{"id":"1e3c753996ea4bba9f6008f0d5368be2","ver":2},{"id":"b57940d1591e46678b339181d1c39a18","ver":2}],"listNum":2,"godownEntryNum":2,"invoiceNum":2,"remarks":"测试备注","contract_no":"","contract_start_date":'',"contract_end_date":''}


// let arr = [5, 1, 3, 4, 5];
// let obj = arr.find(it => it === 5);
// console.log(obj);
// console.log(typeof obj);

// let obj = {
//     name: '睡觉撒',
//     age: 1
// };

// delete obj.age;
// console.log(obj);

// let str = 'You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near \'?,\n                            is_stop       = ?,\n                            up\' at line 1;起始his_dept_code为:undefined。10条数据被修改。'
// console.log(str.replace(/(\r\n)|(\n)|\s{2}/g, ''));

console.log(`${new Date()}`.length);

console.log([1, 2, 3].length);

//insert插入8个字段
// tempArr.length/8

// errCount.push(tempArr[1]);


function chunk(arr, size) {

    var arr2 = [];
    for (var i = 0; i < arr.length; i = i + size) {
        arr2.push(arr.slice(i, i + size));
    }
    return arr2;
}

let arr=[1,2,3,4,5,6,7,8,9];
let arr2=chunk(arr,8);
console.log(arr2);

/**
 * 一方有一方没有的字段
 * patient_bill,rx_date,in_hospital_code,hospital_count,in_dept_code,in_dept_name,perform_code,perform_name,inpatient_ward,
 * petinet_bed_code,admission_date,discharge_date
 */
/**
 * 门诊字段对应的spd
 * charge_number,patient_bill,rx_date,ordered_code,ordered_name,diagnose_detail,charge_item_code,charge_item_name,
 * charge_kind_code,charge_kind_name,verification_num,charge_price,charge_prices,doctor_code,doctor_name,patient_code,
 * patient_name,patient_gender,patient_date,patient_age,patient_height,patient_weight,patient_type,charge_operator,charge_date,
 * hospital_code,material_name,
 */
/**
 * 住院计费
 * charge_number,in_hospital_code,hospital_count,in_dept_code,in_dept_name,ordered_code,ordered_name,diagnose_detail
 * ,perform_code,perform_name,charge_item_code,charge_item_name,charge_kind_code,charge_kind_name,verification_num,
 * charge_price,charge_prices,doctor_code,doctor_name,patient_code,patient_name,patient_gender,patient_date,
 * patient_age,patient_height,patient_weight,patient_type,inpatient_ward,petinet_bed_code,charge_operator,charge_date,hospital_code,material_name,
 * admission_date,discharge_date
 */
"charge_number"

charge_number,patient_bill,rx_date,ordered_code,ordered_name,diagnose_detail,charge_item_code,charge_item_name,
 charge_kind_code,charge_kind_name,verification_num,charge_price,charge_prices,doctor_code,doctor_name,patient_code,
  patient_name,patient_gender,patient_date,patient_age,patient_height,patient_weight,patient_type,charge_operator,charge_date,
 hospital_code,material_name



 charge_number,in_hospital_code,hospital_count,in_dept_code,in_dept_name,ordered_code,ordered_name,diagnose_detail
 ,perform_code,perform_name,charge_item_code,charge_item_name,charge_kind_code,charge_kind_name,verification_num,
  charge_price,charge_prices,doctor_code,doctor_name,patient_code,patient_name,patient_gender,patient_date,
 patient_age,patient_height,patient_weight,patient_type,inpatient_ward,petinet_bed_code,charge_operator,charge_date,hospital_code,material_name,
 admission_date,discharge_date


 /**
  * his
  * 
  * id_count,rx_no,rx_date,ordered_by,ordered_name,admiss_diag_str,charge_detail_code,charge_detail_name,charge_kind_code
  * ,charge_kind_name,charge_num,unit_price,charge_money,doctor_code,ordered_doctor,patient_id,patient_name,patient_gender,
  * patient_date,patient_age,patient_height,patient_weight,patient_type,jfy_name,jf_date,bar_code,material_name
  */

  /**
   * id_count,in_hospital_no,hospital_count,admiss_dept,admiss_dept_name,ordered_by,ordered_name,admiss_diag_str,
   * perform_by,perform_name,charge_detail_code,charge_detail_name,charge_kind_code,charge_kind_name,charge_num,
   * unit_price,charge_money,doctor_code,ordered_doctor,patient_id,patient_name,patient_gender,patient_date,patient_age
   * patient_height,patient_weight,patient_type,inpatient_ward,bed_no,jfy_name,jf_date,bar_code,material_name,admission_date,
   * discharge_date
   */

  id_count,rx_no,rx_date,ordered_by,ordered_name,admiss_diag_str,charge_detail_code,charge_detail_name,charge_kind_code
   ,charge_kind_name,charge_num,unit_price,charge_money,doctor_code,ordered_doctor,patient_id,patient_name,patient_gender,
   patient_date,patient_age,patient_height,patient_weight,patient_type,jfy_name,jf_date,bar_code,material_name


   id_count,in_hospital_no,hospital_count,admiss_dept,admiss_dept_name,ordered_by,ordered_name,admiss_diag_str,
    perform_by,perform_name,charge_detail_code,charge_detail_name,charge_kind_code,charge_kind_name,charge_num,
   unit_price,charge_money,doctor_code,ordered_doctor,patient_id,patient_name,patient_gender,patient_date,patient_age,
   patient_height,patient_weight,patient_type,inpatient_ward,bed_no,jfy_name,jf_date,bar_code,material_name,admission_date,
 discharge_date



 charge_number,patient_bill,rx_date,ordered_code,ordered_name,diagnose_detail,charge_item_code,charge_item_name,
  charge_kind_code,charge_kind_name,verification_num,charge_price,charge_prices,doctor_code,doctor_name,patient_code,
 patient_name,patient_gender,patient_date,patient_age,patient_height,patient_weight,patient_type,charge_operator,charge_date,
 hospital_code,material_name,


 
 