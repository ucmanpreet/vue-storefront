
import { gql } from "@apollo/client/core";

// export async function getCustomer(context, customerToken) {
export async function getCustomer(context, userData) {


 

  try {
    return await context.client
      .query({
        query: gql `query users{
          user(id:${parseInt(userData?.id)}){
              id
              name
              email
              password
              apiToken
              roleId
              status
              role{id}
              createdAt
              updatedAt
              success
            }
          }
        `
        // query: gql`
        // query accountInfo {
        //     accountInfo {
        //         status
        //         message
        //         customer {
        //             id
        //             firstName
        //             lastName
        //             name
        //             gender
        //             dateOfBirth
        //             email
        //             phone
        //             password
        //             apiToken
        //             customerGroupId
        //             subscribedToNewsLetter
        //             isVerified
        //             token
        //             notes
        //             status
        //             createdAt
        //             updatedAt
        //         }
        //     }
        // }`
      });
  } catch (error) {
    console.log('Error getCustomer:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
