//   const handleSubmit = () => {
//     const convertHeight = Number(formValues.height);
//     const convertWeight = Number(formValues.weight);

//     let heightCheck = false;
//     let weightCheck = false;
//     console.log(!convertHeight);

//     console.log(convertWeight);

//     if (formValues.height && !convertHeight) {
//       setFormErrors({ ...formErrors, heightError: "enter a valid number" });
//     } else if (formValues.weight && !convertWeight) {
//       setFormErrors({ ...formErrors, weightError: "enter a valid number" });
//     }

//     // Check for height
//     if (convertHeight) {
//       // Check if value entered is a number
//       if (isNaN(convertHeight)) {
//         setFormErrors({ ...formErrors, heightError: "enter a valid number" });
//         return;
//       }

//       // check if value is between range
//       // check for cm
//       if (
//         units.height == "cm" &&
//         (convertHeight < 152 || convertHeight > 213)
//       ) {
//         setFormErrors({
//           ...formErrors,
//           heightError: "value can be from 152 - 213",
//         });
//         return;
//       }

//       // check for in
//       if (units.height == "in" && (convertHeight < 60 || convertHeight > 84)) {
//         setFormErrors({
//           ...formErrors,
//           heightError: "value can be from 60 - 84",
//         });
//         return;
//       }

//       heightCheck = true;
//     }

//     // Check for width
//     if (convertWeight) {
//       // Check if value entered is a number
//       if (isNaN(convertWeight)) {
//         setFormErrors({ ...formErrors, weightError: "enter a valid number" });
//         return;
//       }

//       // check if value is between range
//       // check for cm
//       if (units.weight == "kg" && (convertWeight < 1 || convertWeight > 150)) {
//         setFormErrors({
//           ...formErrors,
//           weightError: "value can be from 1 - 150",
//         });
//         return;
//       }

//       // check for in
//       if (units.weight == "lbs" && (convertWeight < 2 || convertWeight > 330)) {
//         setFormErrors({
//           ...formErrors,
//           weightError: "value can be from 2 - 330",
//         });
//         return;
//       }
//     }
//   };
