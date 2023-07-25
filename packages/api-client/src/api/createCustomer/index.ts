
import { gql } from '@apollo/client/core';
import { CreateRegisterInput } from '../../types';

type Variables = {
    input?: CreateRegisterInput;
  };

export async function createCustomer(context, params) {
  const inputFilters = {
    // firstName: params?.first_name,
    // lastName: params?.last_name,
    // email: params?.email,
    // password: params?.password,
    // passwordConfirmation: params?.password_confirmation
    name : params?.first_name + ' ' + params?.last_name,
    email: params?.email,
    password: params?.password,
    passwordConfirmation: params?.password_confirmation,
    
    roleId : 1,
    status : true
  };

  const variables: Variables = {
    input: inputFilters
  };

  console.log({variables},'hbhjsfhsdffhf===================================');
  
  /*name: "demooucodesft"
            email: "demooucodesft@yopmail.com"
            password: "123456"
            passwordConfirmation:"123456"
             */

  try {
    return await context.client
      .mutate({
        mutation: gql`
        mutation{
          createUser(input:{
            name: "${params?.first_name + ' ' + params?.last_name}"
            email: "${params?.email}"
            password: "${params?.password}"
            passwordConfirmation:"${params?.password_confirmation}"
            
            roleId:1
            status:true
              }){
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
            }`,
        // mutation: gql`
        // mutation customerRegister ($input: CreateRegisterInput!) {
        //     customerRegister(input: $input) {
        //         status
        //         success
        //     }
        // }`,
        variables: variables
      });
  } catch (error) {
    console.log('Error customerRegister:');
    console.log(error);
    throw error.graphQLErrors?.[0].message || error.networkError?.result || error;
  }
}
