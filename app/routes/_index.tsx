import Button from "@mui/material/Button";
import type { V2_MetaFunction } from "@remix-run/node";
import { useModal } from "mui-modal-provider";
import SimpleDialog from "~/components/SimpleDialog";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { showModal } = useModal();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <Button
        variant="contained"
        onClick={() => showModal(SimpleDialog)}
        color="primary"
      >
        simple dialog
      </Button>
    </div>
  );
}
