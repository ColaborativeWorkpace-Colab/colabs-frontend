import React, { useEffect, useState } from "react";
import Editor from "../codeeditor/Editor";
import axios from "axios";

const ProjectDetailBody = ({ loadedTree, loadedContent }) => {
  return (
    <div>
      <Editor loadedContent={loadedContent}/>
    </div>
  );
};

export default ProjectDetailBody;
