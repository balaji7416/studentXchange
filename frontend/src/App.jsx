import { Routes, Route } from "react-router-dom";
import { HomePage, PostAdPage, AuthPage } from "@pages";
import { ResponsiveLayout } from "@layouts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ResponsiveLayout />}>
          <Route index element={<HomePage />} />
          <Route path="postadd" element={<PostAdPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
