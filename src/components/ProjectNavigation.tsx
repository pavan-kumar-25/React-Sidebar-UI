import {
    AdjustmentsHorizontalIcon,
    ArrowTrendingUpIcon,
    BoltIcon,
    CursorArrowRaysIcon,
    PencilIcon,
    UserGroupIcon,
    UserIcon,
    XMarkIcon,
  } from "@heroicons/react/16/solid";
  import { motion } from "framer-motion";
  import NavigationLink from "./NavigationLink";
  
  const variants = {
    close: {
      x: -300,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };
  
  interface Props {
    selectedProject: string;
    isOpen: boolean;
    setSelectedProject: (project: string | null) => void;
  }
  
  const ProjectNavigation = ({
    selectedProject,
    isOpen,
    setSelectedProject,
  }: Props) => {
    return (
      <motion.nav
        variants={variants}
        initial="close"
        animate="open"
        exit="close"
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className={`h-full flex flex-col gap-8 absolute bg-neutral-900 ml-0 ${
          isOpen ? "left-64" : "left-20"
        } border-r border-neutral-800 p-5`}
      >
        <div className="flex flex-row w-full justify-between place-items-center">
          <h1 className="tracking-wide text-neutral-100 text-lg">{selectedProject}</h1>
          <button onClick={() => setSelectedProject(null)}>
            <XMarkIcon className="w-8 stroke-neutral-400" />
          </button>
        </div>
        <input
          placeholder="Search"
          type="text"
          className="px-3 py-2 tracking-wide rounded-lg bg-neutral-600/40 text-neutral-100"
        />
        <div className="flex flex-col gap-3">
          <NavigationLink name="Progress">
            <ArrowTrendingUpIcon className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
          </NavigationLink>
  
          <NavigationLink name="Team members">
            <UserGroupIcon className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
          </NavigationLink>
  
          <NavigationLink name="In Review">
            <PencilIcon className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
          </NavigationLink>
  
          <NavigationLink name="In Progress">
            <BoltIcon className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
          </NavigationLink>
  
          <NavigationLink name="Up next">
            <CursorArrowRaysIcon className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
          </NavigationLink>
  
          <NavigationLink name="Project Setting">
            <AdjustmentsHorizontalIcon className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
          </NavigationLink>
        </div>
  
        <div className="flex flex-col gap-5">
          <h1 className="tracking-wide text-neutral-300">Team Members</h1>
          <a href="#" className="flex flex-row gap-3 place-items-center">
            <UserIcon className="w-8 p-1 rounded-full stroke-rose-800 bg-rose-200/70" />
            <p className="tracking-wide text-neutral-400">Steve Jobs</p>
          </a>
  
          <a href="#" className="flex flex-row gap-3 place-items-center">
            <UserIcon className="w-8 p-1 rounded-full stroke-emerald-800 bg-emerald-200/70" />
            <p className="tracking-wide text-neutral-400">Bill Gates</p>
          </a>
  
          <a href="#" className="flex flex-row gap-3 place-items-center">
            <UserIcon className="w-8 p-1 rounded-full stroke-indigo-800 bg-indigo-200/70" />
            <p className="tracking-wide text-neutral-400">Jeff Bezos</p>
          </a>
        </div>
      </motion.nav>
    );
  };
  
  export default ProjectNavigation;
  