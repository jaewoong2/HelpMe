type serviceType = {
    lookingFor: {
        number: number;
        position: string[];
        techStack: string[];
    };
    user: {
        name: string;
        position: string;
        contact: string[];
        links: string[];
    };
}

type serviceContextType = {
    lookingFor: {
        number: number;
        setNumber: (number: number) => void;
        position: string[];
        addPosition: (position: string) => void;
        removePosition: (index: number) => void;
        techStack: string[];
        addTechStack: (position: string) => void;
        removeTechStack: (index: number) => void;
    };
    user: {
        name: string;
        setName: (name: string) => void;
        position: string[];
        addPosition: (position: string) => void;
        removePosition: (index: number) => void;
        contact: string[];
        addContact: (position: string) => void;
        removeContact: (index: number) => void;
        links: string[];
        addLinks: (link: string) => void;
        removeLinks: (index: number) => void;
    };
}

export { serviceType, serviceContextType }