import apparelGif from "./assets/apparel.gif";
import deventsGif from "./assets/devents.gif";
import todosGif from "./assets/todos.gif";

const projectsData = [
  {
    title: "Apparel E-Commerce",
    techUsed: ["React", "Redux", "Firebase", "Sass", "Stripe API"],
    link: "https://e-commerce-app-9b649.firebaseapp.com/",
    github: "https://github.com/edinburghrules/ecommerce-app",
    plug: `<p>E-commerce app made with React, Redux & Firebase. View products by category, filter and sort, add products to favourites list, add, edit and remove products in cart and checkout with Stripe API.</p>
      <p>Fully responsive for mobile devices.</p>`,
    gif: apparelGif,
    bgColors: {
      light: "#A556F7",
      dark: "#875EF4",
      btn: "#7540D6",
    },
  },
  {
    title: "Devents",
    techUsed: ["React", "Redux", "Firebase", "Styled Components"],
    link: "https://devents-e8874.firebaseapp.com/",
    github: "https://github.com/edinburghrules/devents-app",
    plug: `<p>Meetup style app made with React, Redux & Firebase. Attend, host, edit and cancel events. Messenger feature allows attendees to chat and for the host to communicate any changes or updates.</p>
      <p>Fully responsive for mobile devices.</p>`,
    gif: deventsGif,
    bgColors: {
      light: "#ED4896",
      dark: "#F23F63",
      btn: "#BD2D60",
    },
  },
  {
    title: "Todos",
    techUsed: ["React", "Sass"],
    link: "https://todos-app-eefb5.firebaseapp.com/",
    github: "https://github.com/edinburghrules/React-todolist",
    plug: `<p>Todo app built with React and CSS. Saves and gets todos to local storage. Add todos, edit todos, mark todos as completed, hide/show completed todos and  delete all or selected todos.</p>
      <p>Fully responsive for mobile devices.</p>`,
    gif: todosGif,
    bgColors: {
      light: "#FAC815",
      dark: "#F87314",
      btn: "#BB7215",
    },
  },
];

export default projectsData;
