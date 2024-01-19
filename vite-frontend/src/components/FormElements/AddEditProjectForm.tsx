import { Controller, SubmitHandler, useFormContext } from "react-hook-form";
import Input from "../FormElements/Input";
import { DevTool } from "@hookform/devtools";
import { Button } from "../FormElements/Button";
import axios from "axios";

export interface AddProjectForm {
  title: string;
  description: string;
  imageFile: FileList;
  customerURL?: string;
}

export const AddEditProjectForm = () => {
  const { handleSubmit, control, watch, reset, register } =
    useFormContext<AddProjectForm>();

  const imageFileValue = watch("imageFile"); // 'imageFile' should match the name attribute of your file input

  console.log("Image File Value:", imageFileValue);

  const onSubmit: SubmitHandler<AddProjectForm> = async (
    data: AddProjectForm
  ) => {
    console.log("Data Image File", data.imageFile[0]);

    try {
      // Use FormData to handle file uploads
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("imageFile", data.imageFile[0]); // Assuming imageFile is a file input
      // data = { ...data, imageFile: data.imageFile[0].name };
      // formData.append("recipe", JSON.stringify(data));

      if (data.customerURL !== undefined) {
        formData.append("customerURL", data.customerURL);
      }

      // Make the POST request using axios
      const response = await axios.post(
        "http://localhost:3000/portfolio-entry",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important when sending FormData
          },
        }
      );

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }

    // reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" name="title" label="title" />
        <Input type="text" name="description" label="description" />
        {/* <Controller
          control={control}
          name={"imageFile"}
          rules={{ required: "Recipe picture is required" }}
          render={({ field: { value, onChange, ...field } }) => {
            return (
              <Input
                {...field}
                value={value?.name}
                handleChange={(event) => {
                  onChange(event.target.files[0]);
                }}
                type="file"
                label="image"
              />
            );
          }}
        /> */}
        <Input type="file" name="imageFile" label="image" />
        <Input type="text" name="customerURL" label="customer link" />
        <Button
          text="Add"
          type="submit"
          variant="primary"
          className="px-16"
        ></Button>
      </form>
      <DevTool control={control} />
    </>
  );
};
