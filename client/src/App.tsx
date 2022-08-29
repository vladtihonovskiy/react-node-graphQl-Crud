import React, { ReactNode, FC } from "react";
import "./App.css";

interface IAppProps {
  /**
   * React children
   */
  children: ReactNode;
}

const App: FC<IAppProps> = ({ children }: IAppProps) => <>{children}</>;

export default App;
