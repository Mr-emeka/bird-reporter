import React from "react";

export const isElement = (element: any) => {
  return React.isValidElement(element);
};


export function selectedProject(projects: Array<Record<string, any>>, selectedId: string) {
  let project = projects.filter(project => project.projectId === selectedId);
  return project.length > 0 ? project[0].name : undefined
}


export function selectedGateway(gateways: Array<Record<string, any>>, selectedId: string) {
  let gateway = gateways.filter(gateway => gateway.gatewayId === selectedId);
  return gateway.length > 0 ? gateway[0].name : undefined
}

