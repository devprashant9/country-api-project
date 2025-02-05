# Countries Project Using API

## Features
- display list of all countries
- shimmer effect before data completely loads
- responsive design
- search functionality
- filter by region
- dynamic routing using "React Router Library"

## 03-02-2025
Initialized the project from scratch with webpack

## Learnings From This Project
The `text-decoration-line in CSS` is used to control only a single propert while `text-decoration` can be used to provide underline, overline and color together.

The `inherit in CSS` inherits property from its closest parent and if the parent dont have that then it inherits from the document.

The `box-shadow in CSS` takes parameters as the following `horizontal vertical blur spread color`.

The `margin-inline in CSS` works according to text-direction which makes centering easy inside a `div` element.

The `span in CSS` display elements from `left to right` while `block in CSS` displays it from `top to bottom` taking up the entire width.

The `margin-block` means applying `margin` in `block` direction.

The `overflow in CSS` is used with parent if the child is spilling out from the container of specified `width and height`.

Use `setMethod` to receive method to receive input from child component as it itself is a function thus no seperate function is required to lift up the state.

Use `filter` to first search the required data then `map` over them to render. In case of `searching` the data.

While using `createBrowserRouter` we wrap everything with `RouterProvider with route prop` now we use `Outlet` so what happens is the `RouterProvider` becomes the wrapper and parent component and we specify routes and nested routes. So routes contains those component that needs to be displayed on every nested route and the `Outlet` component becomes the displayer of the nested routes. 

Toggling of `slug URL` while passing and receiving it again in `useParams` hook.

Handling `multiple promises` using `Promise.all()`.

The `Link` tag has an prop called `state` which helps to pass data from current page to new redirected page and to access the data it provides a hook called `useLocation()`.

The `Outlet` tag has an prop called `context` which helps to pass data to all the children component and to access the data it provides a hook called `useOutletContext()`.

## 05-02-2025
Completed the project and pushed to github.

