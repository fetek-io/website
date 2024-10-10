import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Delivering Excellence Data and Software Services": "Delivering Excellence Data and Software Services",
      "About FETEK": "About FETEK",
       "Services": "Services",
       "Technologies": "Technologies",
       "Process": "Process",
       "Portfolio": "Portfolio",
       "Data Services": "Data Services",
       "Not only striving towards effective value for customers, FETEK is also committed to providing specialized service quality for each customer's characteristics.": "Not only striving towards effective value for customers, FETEK is also committed to providing specialized service quality for each customer's characteristics."
    }
  },
  vi: {
    translation: {
      "Delivering Excellence Data and Software Services": "Cung cấp dịch vụ dữ liệu và phần mềm xuất sắc",
      "About FETEK": "Về FETEK",
      "Services": "Dịch vụ",
       "Technologies": "Công nghệ",
       "Process": "Quá trình",
       "Portfolio": "Danh mục đầu tư",
       "Data Services": "Data Services",
       "Not only striving towards effective value for customers, FETEK is also committed to providing specialized service quality for each customer's characteristics.": "Không chỉ hướng đến giá trị hiệu quả cho khách hàng, FETEK còn cam kết cung cấp chất lượng dịch vụ chuyên biệt theo đặc điểm của từng khách hàng."
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;