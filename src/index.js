import { export_table_to_excel } from "./export2excel";

document.querySelector('.btn-export').addEventListener('click', () => {
    export_table_to_excel('excelTable');
})


