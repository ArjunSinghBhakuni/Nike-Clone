export const setToast = (toast, title, status, duration = 2000, description) => {
 toast({
     title,
     description,
     status,
     duration,
     isClosable: true,
     position: 'top'
 });
};
