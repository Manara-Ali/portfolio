// 1. IMPORT ALL OF OUR COMPONENTS HERE
import Home from "./../components/Home";

// 2. CREATE A FUNCTION TO HOLD OUR COMPONENTS
export const components = [
  {
    component_name: "Home",
    component: Home,
  },
];

// 3. Create a function responsible to retrieve available components
export const retrieveComponent = (component_name) => {
  if (!components.includes(component_name)) {
    return null;
  }
  for (let i = 0; i < components.length; i++) {
    if (components[i] === component_name) {
      return i;
    }
    return null;
  }
};
