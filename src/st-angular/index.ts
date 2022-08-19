import { sep } from 'path';
import { apply, mergeWith, Rule, SchematicContext, SchematicsException, template, Tree, url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { parseName } from '@schematics/angular/utility/parse-name';
import { buildDefaultPath } from '@schematics/angular/utility/workspace';

import { Schema } from './scema';

// Helpers.
const addExclamation = (value: string): string => `${value}!`;

export function stAngular(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const workspaceConfigBuffer = tree.read("angular.json");
    if (!workspaceConfigBuffer) {
      throw new SchematicsException("Not an Angular CLI workspace");
    }

    const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
    const projectName = _options.project
      || workspaceConfig.defaultProject
      || Object.keys(workspaceConfig.projects)[0];
    const project = workspaceConfig.projects[projectName];

    project.extensions = project.extensions || {};
    project.extensions['projectType'] = project.extensions['projectType'] || 'app';
    const src = project.sourceRoot || 'src';
    const prefix = project.prefix || 'app';
    const parents = _options.name.split(/\/|\\/);
    parents.pop();
    const parent = parents.join(sep);

    const defaultProjectPath = buildDefaultPath(project);
    const parsedPath = parseName(defaultProjectPath, _options.name);
    const { name, path } = parsedPath;

    const sourceTemplates = url('./files');

    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings,
        name,
        path,
        src,
        prefix,
        parent,
        addExclamation,
      })
    ]);

    return mergeWith(sourceParametrizedTemplates)(tree, _context);

    // const { name } = _options;
    // tree.create('hello.js', `console.log('Hello ${name}!');`);
    // return tree;
  };
}

// npx -p dtsgenerator dtsgen schema.json -o schema.d.ts