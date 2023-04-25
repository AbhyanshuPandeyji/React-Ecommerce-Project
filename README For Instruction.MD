#### The React E-commerce Project 
- React  E-commerce Project 


# This is Some packages and instructions to follow

# Client Side
npm install will be required to install all node modules
1 - npx create-react-app client to create the react app 
2 - npm install react-router-dom 
4 - Material ui is been used instead of font-awesome - npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
5 - for bootstrap - cdn link or npm install react-bootstrap

## For running
- need to run the npm install to install the all packages in the client folder
- then to run it use the - npm start



#### functionality 
- This is A static Website - with the ui using bootstrap 
- it has routing , sliders , responsive design , and a cart modal to show the the cart 




#### Links
netlify overview link -
netlify link - ["https://react-ecommerce-project-abhyanshu.netlify.app/"]

github link  - tried to upload form github to netlify 
github link - ["https://github.com/AbhyanshuPandeyji/React-Ecommerce-Project.git"]


you can reference to the Oliver the Dev for the reference of this clone.




#### The Start
- client - frontend folder

### The Basic Structure 
1 - we have 5 pages 
Home
Categories/Products
Single Product
About us
Contact us

2 - we are gonna use the RouterProvider for the Rendering in return

3 - we have the same navbar and footer so we are gonna have the layout 
it will include the Outlet component to render our pages 
it will be between the Navbar and the Footer
```
layout = ( 
    <Navbar/>
    <Outlet/>
    <Footer/>
)

```


#### front end ui complete
- sass doesn't work for me so the pure css
- know how to choose classes for the styling and choose it wisely and effectively

#### component created
- navbar - the navigation  
- cart - the items in the modal 
- contact - contact/email letter line
- feature - feature section of the page where we see the special products
- list - to see the products of items in the products page
- footer - the multiple line no links footer 
- slider - the main home page slider with minimal js and state management
- category - the page where we go to specific category of  products based on filters
- card - the container of the products card / section card


#### pages created
- Home - includes - category , feature , contact
- Products - includes the all products with the selection to choose  from the filters present 
- product - a single product page with the images and the right side of same old add to cart section 
