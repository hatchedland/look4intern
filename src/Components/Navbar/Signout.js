import { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

export default function Signout() {
    const [size, setSize] = useState(null);

    const handleOpen = (value) => setSize(value);

    return (
        <Fragment>
            <Button onClick={() => handleOpen("xs")} variant="text" color="red" className="rounded-none outline-none">
                Sign Out
            </Button>
            <Dialog open={ size === "xs" } size={size || "md"} handler={handleOpen} >
                <DialogHeader>Confirm Sign out?</DialogHeader>
                <DialogBody divider>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
                    reprehenderit omnis perspiciatis aut odit! Unde architecto
                    perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
                    praesentium magni corrupti explicabo!
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" color="blue" onClick={() => handleOpen(null)} className="mr-1 rounded-none" >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" className='rounded-none' color="red"
                        onClick={() => handleOpen(null)} >
                        <span>Sign out</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </Fragment>
    );
}