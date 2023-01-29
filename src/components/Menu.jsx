import { motion } from "framer-motion";

function Menu(props) {
  const menuVariants = {
    open: { height: "auto" },
    closed: { height: 0 },
  };

  return (
    <motion.div
      className=" cursor-pointer m-2 sm:max-w-full flex items-center "
      onClick={props.handleClick}
      animate={props.clicked ? "open" : "closed"}
      variants={menuVariants}
      transition={{ duration: 0.5 }}
    >
      <h4 className="icon text-lg font-medium p-1" alt="">Menu</h4>
    </motion.div>
  );
}

export default Menu;
