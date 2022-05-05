type serviceType = {
    lookingFor: {
        number: number;
        position: string[];
        techStack: string[];

    };
    user: {
        name: string;
        position: string[];
        contact: string[];
        links: string[];
    };
}

type serviceContextType = {
    title: {
        title?: string;
        setTitle: (title: string) => void
    };
    lookingFor: {
        number?: number;
        setNumber: (number: number) => void;
        position: (string | undefined)[];
        setPosition: (position: string, index: number) => void
        addPosition: () => void;
        removePosition: (index: number) => void;
        techStack: (string | undefined)[];
        setTechStack: (techStack: string, index: number) => void
        addTechStack: () => void;
        removeTechStack: (index: number) => void;
    };
    user: {
        name?: string;
        setName: (name: string) => void;
        position: (string | undefined)[];
        setPosition: (position: string, index: number) => void
        addPosition: () => void;
        removePosition: (index: number) => void;
        contact: (string | undefined)[];
        addContact: () => void;
        setContact: (contact: string, index: number) => void
        removeContact: (index: number) => void;
        links: (string | undefined)[];
        setLinks: (link: string, index: number) => void
        addLinks: () => void;
        removeLinks: (index: number) => void;
    };
}

export { serviceType, serviceContextType }