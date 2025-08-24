import { Routes, Route } from "react-router-dom";
import { HomePage, PostAdPage, AuthPage, AdView } from "@pages";
import { ResponsiveLayout } from "@layouts";
import { ProtectedRoute } from "@utils";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ResponsiveLayout />}>
          <Route index element={<HomePage />} />

          <Route
            path="postadd"
            element={
              <ProtectedRoute>
                <PostAdPage />
              </ProtectedRoute>
            }
          />
          <Route path="/adview/:id" element={<AdView />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
