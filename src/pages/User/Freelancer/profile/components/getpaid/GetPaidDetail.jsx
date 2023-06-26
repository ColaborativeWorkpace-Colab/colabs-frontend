import { useEffect, useState } from "react";
import { BaseURL } from "../../../../../../services/constants/Constants";
import { ErrorMessage, Field, Form, Formik } from "formik";

const GetPaidDEtail = () => {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get(BaseURL + "chapa/banks");
        setBanks(resp.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="w-full md:px-[20px] md:px-[80px] lg:px-[100px]">
      <div className="mt-[30px]">
        <Formik
          className="space-y-4 md:space-y-6"
          initialValues={{
            bankName: banks[0],
            accountNumber: "",
            tradeLicense: null,
            accountName: "",
            businessName: "",
            legalDoc: null,
          }}
          onSubmit={async (values, actions) => {
            if (values.legalDoc) {
              const resp = await getImageUrl(values.legalDoc);
              values.legalDoc = resp;
            }

            if (values.tradeLicense) {
              const resp = await getImageUrl(values.tradeLicense);
              values.tradeLicense = resp;
            }

            handleSubmitRequest({
              legalInfo: {
                bank: {
                  bankCode: banks.find((bank) => bank.name === values.bankName)
                    .id,
                  accountNumber: values.accountNumber,
                  accountName: values.accountName,
                  businessName: values.businessName,
                },
                legalDoc: values.legalDoc || "",
                tradeLicense: values.tradeLicense || "",
              },
              type: "VERIFICATION",
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            setFieldValue,
          }) => (
            <Form>
              <div className="my-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Bank Account
                </label>

                <div className="flex">
                  <Field
                    as="select"
                    name="bankName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"
                  >
                    {banks.length > 0 &&
                      banks?.map((bank, index) => (
                        <option key={index}>{bank.name}</option>
                      ))}
                  </Field>
                </div>
              </div>
              <div className="my-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Bank Account Number
                </label>

                <div className="flex">
                  <Field
                    name="accountnumber"
                    placeholder="Enter your bank account Number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"
                  />
                </div>
              </div>
              <div className="my-3">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Bank Account Name
                </label>

                <div className="flex">
                  <Field
                    type="text"
                    placeholder="Enter your bank account Name"
                    name="accountName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring"
              >
                Connect
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default GetPaidDEtail;
