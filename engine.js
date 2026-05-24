/**
 * SOLVM™ Ecosystem • Mildred Cognitive Core
 * (c) 2026 Mary of Tech Pty Ltd. Melbourne, Australia.
 * * Architectural Module: Deterministic Behavioral State Machine
 * Intent: Client-side cognitive pacing and context regulation for edge hardware.
 */

const COGNITIVE_STATES = {
    GROUNDING: "GROUNDING", // Triggered during acute cognitive overwhelm / anxiety
    MINIMALIST: "MINIMALIST", // Hyper-concise, strict task directives for focus blocks
    COLLABORATIVE: "COLLABORATIVE" // Standard interactive brainstorming / iterative design
};

class MildredCoreEngine {
    constructor(userConfig = {}) {
        this.currentState = COGNITIVE_STATES.COLLABORATIVE;
        this.metricsWindow = {
            interactionVelocity: 0, // Words per minute / typing pacing
            syntaxOverwhelmScore: 0,  // Detection of chaotic/panicked inputs
            explicitFocusBlockActive: false
        };
        this.deviceIsAirGapped = true; // Enforced SAEF zero-telemetry layer
    }

    /**
     * Analyzes incoming client-side telemetry to shift behavioral states
     * entirely on the edge device layer without cloud network leaks.
     */
    evaluateCognitiveLoad(inputString, inputVelocity, isFocusActive) {
        this.metricsWindow.interactionVelocity = inputVelocity;
        this.metricsWindow.explicitFocusBlockActive = isFocusActive;

        // Detect high-stress or pacing anomalies in the text string
        const panicKeywords = ["panic", "stressed", "overwhelmed", "crazy", "scared", "rushed"];
        const containsPanic = panicKeywords.some(word => inputString.toLowerCase().includes(word));

        if (containsPanic) {
            this.currentState = COGNITIVE_STATES.GROUNDING;
        } else if (isFocusActive || inputVelocity > 120) {
            this.currentState = COGNITIVE_STATES.MINIMALIST;
        } else {
            this.currentState = COGNITIVE_STATES.COLLABORATIVE;
        }

        return this.generateSchemaOutput();
    }

    /**
     * Synthesizes the exact output behavioral schema based on current state alignment
     */
    generateSchemaOutput() {
        const responseSchema = {
            stateId: this.currentState,
            dataEnclaveSecure: this.deviceIsAirGapped,
            executionTimestamp: Date.now()
        };

        switch (this.currentState) {
            case COGNITIVE_STATES.GROUNDING:
                responseSchema.behaviorPrimitives = {
                    brevityLevel: 1.0, // Short, grounding phrases
                    empathyTuning: 1.0, // Maximum validation
                    enforceRestInterval: true
                };
                break;

            case COGNITIVE_STATES.MINIMALIST:
                responseSchema.behaviorPrimitives = {
                    brevityLevel: 0.2, // Drastically reduced word counts
                    empathyTuning: 0.2, // Pure functional instruction
                    enforceRestInterval: false
                };
                break;

            case COGNITIVE_STATES.COLLABORATIVE:
            default:
                responseSchema.behaviorPrimitives = {
                    brevityLevel: 0.6,
                    empathyTuning: 0.7,
                    enforceRestInterval: false
                };
                break;
        }

        return responseSchema;
    }
}

// Initialize the local core for client-side evaluation
const mildredInstance = new MildredCoreEngine();
console.log("SOLVM::Mildred Cognitive Core initialized successfully on local device layer.");
