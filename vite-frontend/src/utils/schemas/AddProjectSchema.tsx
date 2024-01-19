import * as yup from "yup";
// const MAX_FILE_SIZE = 102400; //100KB

// const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };

// function isValidFileType(fileName, fileType) {
//   return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
// }

export const addProjectSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required.")
    .max(20, "Title is too long"),
  description: yup
    .string()
    .required("Description is required.")
    .min(8, "Description is to short.")
    .max(1000, "Description is to long."),
  imageFile: yup.mixed<FileList>().required(),
  // .test({
  //   name: "fileSize",
  //   test: function (value) {
  //     if (!value) return true; // If no file is provided, skip validation

  //     // Check the file size (adjust the limit as needed)
  //     const maxSize = 102400; // 100KB
  //     const fileList = value as FileList;

  //     return Array.from(fileList).every((file) => file.size <= maxSize);
  //   },
  //   message: "File is too large",
  // })
  // .test({
  //   name: "fileType",
  //   test: function (value) {
  //     if (!value) return true; // If no file is provided, skip validation

  //     // Check file types (adjust the allowed types as needed)
  //     const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
  //     const fileList = value as FileList;

  //     return Array.from(fileList).every((file) =>
  //       allowedTypes.includes(file.type)
  //     );
  //   },
  //   message: "Invalid file type",
  // }),

  customerLink: yup.string().url("Please enter a valid URL"),
});
