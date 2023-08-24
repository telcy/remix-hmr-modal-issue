import { DialogContent } from "@mui/material";
import type { DialogProps } from "@mui/material/Dialog";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

const SimpleDialog: React.FC<DialogProps> = ({ ...props }) => (
  <Dialog {...props}>
    <DialogTitle>Lorem ipsum</DialogTitle>
    <DialogContent>
      Lorem dolor sit amet consectetur adipisicing elit. Blanditiis, nulla
      impedit soluta accusantium dolores aliquid optio placeat porro amet,
      suscipit quasi quaerat veritatis minima tenetur minus delectus. Nostrum,
      rem sapiente?
    </DialogContent>
  </Dialog>
);

export default SimpleDialog;
