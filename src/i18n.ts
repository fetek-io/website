import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      // Header 
       "About FETEK": "About FETEK",
       "Services": "Services",
       "Technologies": "Technologies",
       "Process": "Process",
       "Portfolio": "Portfolio",
       "Data Services": "Data Services",
       "Software Services": "Software Services",
      //  Banner
       "Contact Us": "Contact Us",
       "Delivering Excellence Data and Software Services": "Delivering Excellence Data and Software Services",
       "Not only striving towards effective value for customers, FETEK is also committed to providing specialized service quality for each customer's characteristics.": "Not only striving towards effective value for customers, FETEK is also committed to providing specialized service quality for each customer's characteristics.",
      //  About Fetek
      "We are a dynamic and innovative company dedicated to providing top-notch software development services tailored to meet the unique needs of our clients. With a team of highly skilled and experienced professionals, we specialize in delivering cutting-edge solutions that drive business growth and efficiency.": "We are a dynamic and innovative company dedicated to providing top-notch software development services tailored to meet the unique needs of our clients. With a team of highly skilled and experienced professionals, we specialize in delivering cutting-edge solutions that drive business growth and efficiency.",
      "Top Fastest Growing Enterprises in the period 2018 - 2023": "Top Fastest Growing Enterprises in the period 2018 - 2023",
      "Top 10 Reputable Technology Enterprises in 2023": "Top 10 Reputable Technology Enterprises in 2023",
      "Professional / Classy / Friendly": "Professional / Classy / Friendly",
      // About Service
      "Which services we support?": "Which services we support?",
      "Web & Mobile \nDevelopment": "Web & Mobile \nDevelopment",
      "Backend \nDevelopment": "Backend \nDevelopment",
      "AI & Machine \nLearning": "AI & Machine \nLearning",
      "Data \nTransformation": "Data \nTransformation",
      'Reporting \nDevelopment': 'Reporting \nDevelopment',
      
      // About Technologies
      "We are experts in these technologies": "We are experts in these technologies",
      "From scratch to execution, Fetek always applies advanced and cutting-edge technologies to deliver your ideas into impactful and scalable products.": "From scratch to execution, Fetek always applies advanced and cutting-edge technologies to deliver your ideas into impactful and scalable products.",
      "technology": {
        "language": "Software engineering",
        "data": "Data engineering"
      },
      // About Contact
      'How do we work together?': 'How do we work together?',
      "FETEK has been highly appreciated and chosen as a long-term partner by many domestic and international organizations because of its service quality with international standards and the professional working style of its staff.": "FETEK has been highly appreciated and chosen as a long-term partner by many domestic and international organizations because of its service quality with international standards and the professional working style of its staff.",
      'Share us your problem': 'Share us your problem',
      'Our engineers will co-work with you to understand, analyze and proposal you our solutions for finishing the projects.': 'Our engineers will co-work with you to understand, analyze and proposal you our solutions for finishing the projects.',
      'We build out our team': 'We build out our team',
      'Our lead engineer will work with you to build out your engineering dream team. All the people you’ll need to make your project a reality': 'Our lead engineer will work with you to build out your engineering dream team. All the people you’ll need to make your project a reality',
      'Work your way': 'Work your way',
      'We’ll act as an extension of your team. Whether you use agile, kanban, or waterfall methodology, your new team will fit in with your working style.': 'We’ll act as an extension of your team. Whether you use agile, kanban, or waterfall methodology, your new team will fit in with your working style.',
      'Long-term Support': 'Long-term Support',
      'We’re in this for the long term and we are available for post-project support and maintenance or anything else.': 'We’re in this for the long term and we are available for post-project support and maintenance or anything else.',
      'location': 'location',
      '5th floor, No. 8, Nguyen Thi Dinh Street, Cau Giay, Ha Noi, Viet Nam': '5th floor, No. 8, Nguyen Thi Dinh Street, Cau Giay, Ha Noi, Viet Nam',

      // Send us me
      'Contact us': 'Contact us',
      'Name': 'Name',
      'Phone Number': 'Phone Number',
      'Message': 'Message',
      'Send Message': 'Send Message',

      // Footer
      'With a experienced talent team, Fetek will be a reputable technology partner to maximize the development of your business': 'With a experienced talent team, Fetek will be a reputable technology partner to maximize the development of your business',
      'Work': 'Work',
      'Busniess Solution': 'Busniess Solution',
      'How We Work': 'How We Work',
      'Web and Mobile Development': 'Web and Mobile Development',
      'Backend Development': 'Backend Development',
      'AI and Machine Learning': 'AI and Machine Learning',
      'Data Transformation': 'Data Transformation',
      'Reporting Development': 'Reporting Development',
      'Data Solution': 'Data Solution',
      'IT Solution': 'IT Solution',
      'Corporate': 'Corporate',
      'Copyright by Fetek. All Right Reserved.': 'Copyright by Fetek. All Right Reserved.',

    }
  },
  vi: {
    translation: {
      // Header
      "About FETEK": "Về FETEK",
      "Services": "Dịch vụ",
       "Technologies": "Công nghệ",
       "Process": "Quá trình",
       "Portfolio": "Danh mục đầu tư",
       "Data Services": "Dịch vụ dữ liệu",
       "Software Services": "Dịch vụ phần mềm",
      //  Banner
       "Contact Us": "Liên hệ",
       "Delivering Excellence Data and Software Services": "Cung cấp dịch vụ dữ liệu và phần mềm xuất sắc",
       "Not only striving towards effective value for customers, FETEK is also committed to providing specialized service quality for each customer's characteristics.": "Không chỉ hướng đến giá trị hiệu quả cho khách hàng, FETEK còn cam kết cung cấp chất lượng dịch vụ chuyên biệt theo đặc điểm của từng khách hàng.",
      //  About Fetek
      "We are a dynamic and innovative company dedicated to providing top-notch software development services tailored to meet the unique needs of our clients. With a team of highly skilled and experienced professionals, we specialize in delivering cutting-edge solutions that drive business growth and efficiency.": "Chúng tôi là một công ty năng động và sáng tạo chuyên cung cấp các dịch vụ phát triển phần mềm hàng đầu được thiết kế riêng để đáp ứng nhu cầu riêng biệt của khách hàng. Với đội ngũ chuyên gia có tay nghề cao và giàu kinh nghiệm, chúng tôi chuyên cung cấp các giải pháp tiên tiến thúc đẩy tăng trưởng và hiệu quả kinh doanh.",
      "Top Fastest Growing Enterprises in the period 2018 - 2023": "Top doanh nghiệp tăng trưởng nhanh nhất giai đoạn 2018 - 2023",
      "Top 10 Reputable Technology Enterprises in 2023": "Top 10 Doanh nghiệp công nghệ uy tín năm 2023",
      "Professional / Classy / Friendly": "Chuyên nghiệp / Sang trọng / Thân thiện",
      // About Services
      "Which services we support?": "Chúng tôi hỗ trợ những dịch vụ nào?",
      "Web & Mobile \nDevelopment": "Phát triển & Website \nỨng dụng di động",
      "Backend \nDevelopment": "Phát triển \nBackend",
      "AI & Machine \nLearning": "AI & Học máy",
      "Data \nTransformation": "Chuyển đổi dữ liệu",
      'Reporting \nDevelopment': 'Báo cáo phát triển',
      // About Technologies
      "We are experts in these technologies": "Chúng tôi là chuyên gia về những công nghệ",
      "From scratch to execution, Fetek always applies advanced and cutting-edge technologies to deliver your ideas into impactful and scalable products.": "Từ khâu đầu đến khâu thực hiện, Fetek luôn áp dụng các công nghệ tiên tiến và hiện đại để biến ý tưởng của bạn thành những sản phẩm có sức ảnh hưởng và khả năng mở rộng.",
      "technology": {
        "language": "Kỹ thuật phần mềm",
        "data": "Kỹ thuật dữ liệu"
      },

      // About contact
      'How do we work together?': 'Chúng ta làm việc cùng nhau như thế nào?',
      "FETEK has been highly appreciated and chosen as a long-term partner by many domestic and international organizations because of its service quality with international standards and the professional working style of its staff.": "FETEK được nhiều tổ chức trong và ngoài nước đánh giá cao và lựa chọn là đối tác lâu dài bởi chất lượng dịch vụ đạt chuẩn quốc tế và phong cách làm việc chuyên nghiệp của đội ngũ nhân viên.",
      'Share us your problem': 'Chia sẻ với chúng tôi vấn đề của bạn',
      'Our engineers will co-work with you to understand, analyze and proposal you our solutions for finishing the projects.': 'Các kỹ sư của chúng tôi sẽ hợp tác với bạn để hiểu, phân tích và đề xuất các giải pháp nhằm hoàn thành dự án.',
      'We build out our team': 'Chúng tôi xây dựng đội ngũ của mình',
      'Our lead engineer will work with you to build out your engineering dream team. All the people you’ll need to make your project a reality': 'Kỹ sư trưởng của chúng tôi sẽ làm việc với bạn để xây dựng đội ngũ kỹ sư mơ ước của bạn. Tất cả những người bạn cần để biến dự án của bạn thành hiện thực',
      'Work your way': 'Làm việc theo cách của bạn',
      'We’ll act as an extension of your team. Whether you use agile, kanban, or waterfall methodology, your new team will fit in with your working style.': 'Chúng tôi sẽ hoạt động như một phần mở rộng của nhóm của bạn. Cho dù bạn sử dụng phương pháp Agile, Kanban hay Waterfall, nhóm mới của bạn sẽ phù hợp với phong cách làm việc của bạn.',
      'Long-term Support': 'Hỗ trợ lâu dài',
      'We’re in this for the long term and we are available for post-project support and maintenance or anything else.': 'Chúng tôi ở đây lâu dài và chúng tôi sẵn sàng hỗ trợ và bảo trì sau dự án hoặc bất kỳ điều gì khác.',
      'location': 'Địa chỉ',
      '5th floor, No. 8, Nguyen Thi Dinh Street, Cau Giay, Ha Noi, Viet Nam': 'Tầng 5, số 8, phố Nguyễn Thị Định, Cầu Giấy, Hà Nội, Việt Nam',
      // Send us me
      'Contact us': 'Liên hệ với chúng tôi',
      'Name': 'Tên',
      'Phone Number': 'Số điện thoại',
      'Message': 'Tin nhắn',
      'Send Message': 'Gửi',

      // Footer
      'With a experienced talent team, Fetek will be a reputable technology partner to maximize the development of your business': 'Với đội ngũ nhân tài giàu kinh nghiệm, Fetek sẽ là đối tác công nghệ uy tín giúp tối đa hóa sự phát triển của doanh nghiệp bạn',
      'Work': 'Công việc',
      'Busniess Solution': 'Giải pháp kinh doanh',
      'How We Work': 'Cách chúng tôi hoạt động',
      'Web and Mobile Development': 'Phát triển ứng dụng web và di động',
      'Backend Development': 'Phát triển Backend',
      'AI and Machine Learning': 'AI và Học máy',
      'Data Transformation': 'Chuyển đổi dữ liệu',
      'Reporting Development': 'Phát triển báo cáo',
      'Data Solution': 'Giải pháp Data',
      'IT Solution': 'Giải pháp IT',
      'Corporate': 'Doanh nghiệp',
      'Copyright by Fetek. All Right Reserved.': 'Bản quyền thuộc về Fetek. Mọi quyền được bảo lưu.',
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;