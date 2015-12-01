# The Meteor Chef - Base
A starting point for Meteor apps.

<table>
  <tbody>
    <tr>
      <th>Base Version</th>
      <td>v3.3.0</td>
    </tr>
    <tr>
      <th>Meteor Version</th>
      <td>v1.2.1</td>
    </tr>
  </tbody>
</table>

[Read the Documentation](http://themeteorchef.com/base)


## Notes
* Using Base to complete 'Building Complex Forms' recipe
* Note, the recipe source code for building complex forms, uses a previous version of Base (with IronRouter)
* Proceeding using Base v3.3, have to transform other recipe code to work with base
* Deviations
  - logout, using an anchor instead of on click event (may change this later)
* I think there may be an error in the recipe code, if (save/submit) update contact info throws an exception (like for missing a required field), that exception seems to be caught and not returned.
  - I changed the return exception, to throw exception, which seemed to correct the issue (per suggested best practices, http://stackoverflow.com/questions/20867771/how-to-return-error-from-meteor-methods-function
  - I also submitted an issue to TMC's github repo
* Since using this base version, the routes are set up a little differently (flowRouter groups)
  - one of the routes (order) actually needs to be accessible to those loggedIn (authenticated) and public. so moved that route to a new dual-use routes group
    - probably could have been handled a few different ways, but I at least wanted to point out running in to this.


Completed submit order. But there is a defect related to saving custom built pizza (won't save). 
