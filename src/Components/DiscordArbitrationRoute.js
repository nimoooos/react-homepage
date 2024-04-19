import { Button, Container } from "react-bootstrap";

export default function DiscordArbitrationRoute() {
    return (
        <>
            <h1>Discord Terms of Service</h1>
            <h2>...automatically says you agree to waive the right to a trial.</h2>
            <Button rel="noreferrer" target="_blank" href="https://discord.com/terms#16" variant="primary">See Discord TOS in new tab</Button>
            <br/>
            <br/>
            <br/>
            
            <h2>Under <b>Settling disputes between you and Discord</b>,</h2>
            <Container className="border border-primary">
                <blockquote className="blockquote"><b>Other remedies.</b> ARBITRATION MEANS THAT YOU WAIVE YOUR RIGHT TO A JURY TRIAL.</blockquote>
            </Container>
            <p>... you'll see that quote.</p>
            <p>You can opt out, but you have to send an email. Here's a link that provides a quick template:</p>
            <Button variant="danger" rel="noreferrer" target="_blank" href="mailto:arbitration-opt-out@discord.com?subject=I%20decline%20the%20agreement%20to%20arbitrate.&body=I%20decline%20the%20agreement%20to%20arbitrate.">
                Decline Now
            </Button>
            <p>Note: I'm not a lawyer, and I urge you to seek more information on what to do. It's possible that this email isn't enough. Please let me know <a rel="noreferrer" href="https://github.com/nimoooos/react-homepage/issues" target="_blank">here</a>.</p>

            <h2>Discord isn't the only one!</h2>
            <p>Watch out for other companies doing the same thing. This is known as Arbitration Clause.</p>
        </>
    )
}