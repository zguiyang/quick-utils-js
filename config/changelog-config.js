const commitTypes = require ( './commit-types' );

function findTypeEntry ( types, commit ) {

  const typeKey = ( commit.revert ? 'revert' : ( commit.type || '' ) ).toLowerCase ();

  return types.find ( ( entry ) => {

    if ( entry.value !== typeKey ) {

      return false;

    }

    return !( entry.scope && entry.scope !== commit.scope );

  } );

}

module.exports = {
  writerOpts: {
    transform: ( commit ) => {

      const entry = findTypeEntry ( commitTypes, commit );

      let discard = true;

      commit.notes.forEach ( note => {

        note.title = 'BREAKING CHANGES';

        discard = false;

      } );

      if ( discard && ( entry === undefined || entry.hidden ) ) return;

      const commitTypeItem = commitTypes.find ( type => commit.type === type.value );

      if ( commitTypeItem ) {

        commit.type = commitTypeItem.label;

      } else {

        if ( discard ) {

          return;

        }

        commit.type = '💩 未知更新类型';

        if ( commit.revert ) {

          commit.type = '⏪ 回滚功能或版本';

        }

      }


      if ( commit.scope === '*' ) {

        commit.scope = '';

      }

      if ( typeof commit.hash === 'string' ) {

        commit.shortHash = commit.hash.substring ( 0, 7 );

      }

      return commit;

    },
  },

};
